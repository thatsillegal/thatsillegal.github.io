const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// 定义 works 和 photography 目录的路径
const worksDir = path.join(__dirname, 'public', 'works');
const photographyDir = path.join(__dirname, 'public', 'photography');

// 提供静态文件服务
app.use(express.static(path.join(__dirname, 'public')));

// 作品 API: 从 works 目录读取文件并返回 JSON
app.get('/api/works', (req, res) => {
    fs.readdir(worksDir, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read works directory.' });
        }

        const works = files.filter(file => file.endsWith('.jpg')).map(image => {
            const name = path.basename(image, '.jpg');
            const descriptionFile = path.join(worksDir, `${name}.txt`);
            let description = '';

            if (fs.existsSync(descriptionFile)) {
                description = fs.readFileSync(descriptionFile, 'utf8');
            }

            return {
                image: `/works/${image}`,
                description: description
            };
        });

        res.json(works);
    });
});

// 摄影作品 API: 从 photography 目录读取文件并返回 JSON
app.get('/api/photography', (req, res) => {
    fs.readdir(photographyDir, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read photography directory.' });
        }

        // 过滤出图片和对应的文本描述
        const works = files.filter(file => file.endsWith('.jpg')).map(image => {
            const name = path.basename(image, '.jpg');
            const descriptionFile = path.join(photographyDir, `${name}.txt`);
            let description = '';

            if (fs.existsSync(descriptionFile)) {
                description = fs.readFileSync(descriptionFile, 'utf8');
            }

            return {
                image: `/photography/${image}`,
                title: name.replace(/-/g, ' '),  // 将标题格式化（例如：work1 -> Work 1）
                description: description
            };
        });

        res.json(works);
    });
});

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

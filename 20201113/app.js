const express = require('express')
const app = express()

const PORT = 6600

// 경로 / 와 매핑
app.get('/', (req, res) => {
    res.send('Hello Express!')
})

// 애플리케이션 시작!
app.listen(PORT, () => {
    console.log('애플리케이션이 시작됨.')
})

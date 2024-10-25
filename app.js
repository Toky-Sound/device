// 這裡是偽代碼，展示如何將表單資料轉換為 JSON 格式並提交
const data = {
    bloodPressure: '120/80',
    bloodOxygen: 98,
    bodyFat: 18,
    timestamp: '2024-10-25 10:30'
};

// 將資料轉換為 JSON
const jsonData = JSON.stringify(data);

// 使用 GitHub API 提交（這需要你擁有 GitHub token 和 repository 權限）
fetch('https://api.github.com/repos/YOUR_USERNAME/YOUR_REPOSITORY/contents/data.json', {
    method: 'PUT',
    headers: {
        'Authorization': 'token YOUR_GITHUB_TOKEN',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        message: '更新資料',
        content: btoa(jsonData) // 使用 Base64 編碼 JSON
    })
}).then(response => {
    if (response.ok) {
        console.log('資料已成功更新至 GitHub 儲存庫');
    } else {
        console.error('提交失敗');
    }
});

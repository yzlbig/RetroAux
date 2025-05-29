// 等待 DOM 完全加载后执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取表单元素
    const smilesForm = document.getElementById('smilesForm');
    const smilesInput = document.getElementById('smilesInput');
    const submitBtn = document.getElementById('submitBtn');
    
    // 获取结果显示元素
    const outputSection = document.getElementById('outputSection');
    const loadingMessage = document.getElementById('loadingMessage'); // 分析中提示
    const resultsContainer = document.getElementById('resultsContainer'); // 结果容器

    // 为提交按钮添加点击事件监听器
    submitBtn.addEventListener('click', function() {
        // 获取输入值并去除空格
        const smilesValue = smilesInput.value.trim();
        
        // 验证输入是否为空
        if (!smilesValue) {
            alert('请输入SMILES字符串！');
            return;
        }
        
        // 验证SMILES格式（简单验证，可根据需求调整）
        const smilesRegex = /^[A-Za-z0-9@+\-\[\]\(\)=#$:\.\\\/]+$/;
        if (!smilesRegex.test(smilesValue)) {
            alert('SMILES格式不正确，请检查输入！');
            return;
        }
        
        // 显示“分析中”提示
        loadingMessage.style.display = 'block';
        resultsContainer.innerHTML = ''; // 清空之前的结果
        
        // 发送请求到后端
        fetch('https://101.42.46.234:60687/upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ smiles: smilesValue }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('服务器响应错误');
            }
            return response.json();
        })
        .then(data => {
            // 隐藏“分析中”提示
            loadingMessage.style.display = 'none';

            // 处理返回的 SMILES 字符串
            if (data.result) {
                const smilesArray = data.result.split('\n').filter(smiles => smiles.trim() !== '');
                displaySmilesResults(smilesArray);
            }
        })
        .catch(error => {
            console.error('请求失败:', error);
            alert('请求失败，请检查网络连接或联系管理员');
            
            // 隐藏“分析中”提示
            loadingMessage.style.display = 'none';
        });
    });

    // 可选：为表单添加提交事件处理（防止有人直接提交表单）
    smilesForm.addEventListener('submit', function(event) {
        // 阻止表单默认提交行为
        event.preventDefault();
    });

    // 显示 SMILES 结果的函数
    function displaySmilesResults(smilesArray) {
        // 遍历 SMILES 数组并显示
        smilesArray.forEach(smiles => {
            const smilesElement = document.createElement('div');
            smilesElement.className = 'smiles-item';
            smilesElement.textContent = smiles;
            resultsContainer.appendChild(smilesElement);
        });
    }
});

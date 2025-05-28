const Home = {
    template: `<div><h1>Home Page</h1><p>欢迎来到主页！</p></div>`
};

const Examples = {
    template: `
        <div>
            <h1>Examples Page</h1>
            <div class="input-output-wrapper">
                <div class="input-section">
                    <form id="smilesForm" onsubmit="return false;">
                        <div class="input-group">
                            <input 
                                type="text" 
                                id="smilesInput" 
                                placeholder="请输入SMILES字符串（例如：CCO）"
                                autocomplete="off"
                                autocapitalize="off"
                                spellcheck="false"
                            >
                        </div>
                        <button type="button" id="submitBtn" @click="submitSmiles">提交分析</button>
                    </form>
                </div>
                <div class="output-section" id="outputSection">
                    <h2 class="output-title">分析结果</h2>
                    <div class="result-container">
                        <div class="properties-list">
                            <div class="result-card">
                                <div class="result-property">
                                    <span class="property-name">分子量</span>
                                    <span class="property-value" id="molecularWeight">-</span>
                                </div>
                                <div class="result-property">
                                    <span class="property-name">LogP</span>
                                    <span class="property-value" id="logP">-</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    methods: {
        submitSmiles() {
            console.log("submitSmiles 函数被调用");
            const smilesInput = document.getElementById('smilesInput');
            if (!smilesInput) {
                console.error("未找到输入框元素");
                return;
            }

            const smilesValue = smilesInput.value.trim();
            if (!smilesValue) {
                alert("请输入SMILES字符串");
                return;
            }

            const smilesRegex = /^[A-Za-z0-9@+\-\[\]\(\)=#$:\.\\\/]+$/;
            if (!smilesRegex.test(smilesValue)) {
                alert("SMILES格式不正确，请检查输入");
                return;
            }

            const molecularWeightElement = document.getElementById('molecularWeight');
            const logPElement = document.getElementById('logP');

            if (molecularWeightElement) molecularWeightElement.textContent = "处理中...";
            if (logPElement) logPElement.textContent = "处理中...";

            fetch('http://10.254.29.16:11357/upload', {
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
                if (molecularWeightElement) molecularWeightElement.textContent = data.molecularWeight || '-';
                if (logPElement) logPElement.textContent = data.logP || '-';
            })
            .catch(error => {
                console.error("请求失败:", error);
                alert("请求失败，请检查网络连接或服务器状态");
                if (molecularWeightElement) molecularWeightElement.textContent = '-';
                if (logPElement) logPElement.textContent = '-';
            });
        }
    }
};

const Methods = {
    template: `<div><h1>Methods Page</h1><p>这里是方法页面。</p></div>`
};

const Documentation = {
    template: `<div><h1>Documentation Page</h1><p>这里是文档页面。</p></div>`
};

const app = Vue.createApp({
    data() {
        return {
            currentView: Home
        };
    },
    methods: {
        navigate(route) {
           const Home = {
    template: `<div><h1>Home Page</h1><p>欢迎来到主页！</p></div>`
};

const Examples = {
    template: `
        <div>
            <h1>Examples Page</h1>
            <div class="input-output-wrapper">
                <div class="input-section">
                    <form id="smilesForm" onsubmit="return false;">
                        <div class="input-group">
                            <input 
                                type="text" 
                                id="smilesInput" 
                                placeholder="请输入SMILES字符串（例如：CCO）"
                                autocomplete="off"
                                autocapitalize="off"
                                spellcheck="false"
                            >
                        </div>
                        <button type="button" id="submitBtn" @click="submitSmiles">提交分析</button>
                    </form>
                </div>
                <div class="output-section" id="outputSection">
                    <h2 class="output-title">分析结果</h2>
                    <div class="result-container">
                        <div class="properties-list">
                            <div class="result-card">
                                <div class="result-property">
                                    <span class="property-name">分子量</span>
                                    <span class="property-value" id="molecularWeight">-</span>
                                </div>
                                <div class="result-property">
                                    <span class="property-name">LogP</span>
                                    <span class="property-value" id="logP">-</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    methods: {
        submitSmiles() {
            console.log("submitSmiles 函数被调用");
            const smilesInput = document.getElementById('smilesInput');
            if (!smilesInput) {
                console.error("未找到输入框元素");
                return;
            }

            const smilesValue = smilesInput.value.trim();
            if (!smilesValue) {
                alert("请输入SMILES字符串");
                return;
            }

            const smilesRegex = /^[A-Za-z0-9@+\-\[\]\(\)=#$:\.\\\/]+$/;
            if (!smilesRegex.test(smilesValue)) {
                alert("SMILES格式不正确，请检查输入");
                return;
            }

            const molecularWeightElement = document.getElementById('molecularWeight');
            const logPElement = document.getElementById('logP');

            if (molecularWeightElement) molecularWeightElement.textContent = "处理中...";
            if (logPElement) logPElement.textContent = "处理中...";

            fetch('http://10.254.29.16:11357/upload', {
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
                if (molecularWeightElement) molecularWeightElement.textContent = data.molecularWeight || '-';
                if (logPElement) logPElement.textContent = data.logP || '-';
            })
            .catch(error => {
                console.error("请求失败:", error);
                alert("请求失败，请检查网络连接或服务器状态");
                if (molecularWeightElement) molecularWeightElement.textContent = '-';
                if (logPElement) logPElement.textContent = '-';
            });
        }
    }
};

const Methods = {
    template: `<div><h1>Methods Page</h1><p>这里是方法页面。</p></div>`
};

const Documentation = {
    template: `<div><h1>Documentation Page</h1><p>这里是文档页面。</p></div>`
};

const app = Vue.createApp({
    data() {
        return {
            currentView: Home
        };
    },
    methods: {
        navigate(route) {
           
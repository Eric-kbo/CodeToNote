import google.generativeai as genai

# 替换 "YOUR_API_KEY" 为您的 API 密钥
api_key = "AIzaSyAiREo9QTL2PWpN6EPT4xY6YUdLZNXPZcw"

# 创建 GenerativeModel 实例
model = genai.GenerativeModel(model_name="gemini-pro")

# 设置模型参数
model.prompt = "你想问我什么？"
model.temperature = 0.7

# 生成响应
response = model.generate()

# 打印响应
print(response)

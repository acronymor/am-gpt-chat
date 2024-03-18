INSERT INTO t_user (NAME, PASSWORD)
VALUES ('admin', 'admin');

INSERT INTO t_template_default (NAME, CONTEXT, CONFIG)
VALUES ('职业顾问',
        '[{ id: "cons-0", role: "user", content: "我想让你担任职业顾问。我将为您提供一个在职业生涯中寻求指导的人，您的任务是帮助他们根据自己的技能、兴趣和经验确定最适合的职业。您还应该对可用的各种选项进行研究，解释不同行业的就业市场趋势，并就哪些资格对追求特定领域有益提出建议。我的第一个请求是", date: "", }, ]',
        '{ model: "gpt-3.5-turbo", temperature: 1, max_tokens: 2000, presence_penalty: 0, frequency_penalty: 0, sendMemory: true, historyMessageCount: 4, compressMessageLengthThreshold: 1000, }');

INSERT INTO t_setting_default (CONTENT)
VALUES ('{ "llm": [ { "model": "chatgpt", "isEnabled": true, "config": { "openAIApiKey": "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", "temperature": 0, "topP": 1, "timeout": 3000, "modelName": "gpt-3.5-turbo", "n": 1, "streaming": false, "configuration": { "baseURL": "http://localhost/v1", "organization": "acronymor" } } } ] }');

INSERT INTO t_setting(USER_ID, CONTENT)
VALUES (1, '{"chatgpt":{"isEnabled":true,"config":{"openAIApiKey":"","temperature":0.7,"topP":1,"timeout":3000,"modelName":"gpt-3.5-turbo","n":1,"streaming":false,"configuration":{"baseURL":"","organization":"acronymor"}}}}')

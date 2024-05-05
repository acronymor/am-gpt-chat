const flow = {
    "nodes": [
        {
            "width": 244,
            "height": 54,
            "id": "1713584040192",
            "type": "custom",
            "data": {
                "type": "start",
                "title": "开始",
                "desc": "",
                "variables": [],
                "selected": false
            },
            "position": {
                "x": 80,
                "y": 282
            },
            "targetPosition": "left",
            "sourcePosition": "right",
            "positionAbsolute": {
                "x": 80,
                "y": 282
            },
        },
        {
            "width": 244,
            "height": 98,
            "id": "llm",
            "type": "custom",
            "data": {
                "type": "llm",
                "title": "LLM",
                "desc": "",
                "variables": [],
                "model": {
                    "provider": "openai",
                    "name": "gpt-3.5-turbo",
                    "mode": "chat",
                    "completion_params": {
                        "temperature": 0.7,
                        "top_p": 1,
                        "presence_penalty": 0,
                        "frequency_penalty": 0,
                        "max_tokens": 512
                    }
                },
                "prompt_template": [
                    {
                        "role": "system",
                        "text": "请回复 pong"
                    }
                ],
                "context": {
                    "enabled": false,
                    "variable_selector": []
                },
                "vision": {
                    "enabled": false
                },
                "memory": {
                    "window": {
                        "enabled": false,
                        "size": 10
                    },
                    "role_prefix": {
                        "user": "",
                        "assistant": ""
                    }
                },
                "selected": false,
            },
            "position": {
                "x": 380,
                "y": 282
            },
            "targetPosition": "left",
            "sourcePosition": "right",
            "positionAbsolute": {
                "x": 380,
                "y": 282
            },
        },
        {
            "width": 244,
            "height": 107,
            "id": "answer",
            "type": "custom",
            "data": {
                "type": "answer",
                "title": "直接回复",
                "desc": "",
                "variables": [],
                "answer": "{{#llm.text#}}",
                "selected": false
            },
            "position": {
                "x": 680,
                "y": 282
            },
            "targetPosition": "left",
            "sourcePosition": "right",
            "positionAbsolute": {
                "x": 680,
                "y": 282
            },
        }
    ],
    "edges": [
        {
            "id": "1713584040192-llm",
            "source": "1713584040192",
            "sourceHandle": "source",
            "target": "llm",
            "targetHandle": "target",
            "type": "custom",
            "data": {
                "sourceType": "start",
                "targetType": "llm"
            }
        },
        {
            "id": "llm-answer",
            "source": "llm",
            "sourceHandle": "source",
            "target": "answer",
            "targetHandle": "target",
            "type": "custom",
            "data": {
                "sourceType": "llm",
                "targetType": "answer"
            }
        },
    ],
    "viewport": {
        "x": 384,
        "y": 106,
        "zoom": 1
    }
}
export default flow
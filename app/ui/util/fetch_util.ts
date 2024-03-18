export function getSetting(mode: string, callback: (response: any) => (void)) {
    fetch(`/api/setting?type=${mode}`, {
        method: "GET",
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        cache: "no-cache"
    }).then((response) => response.json())
        .then((response) => {
            if (response.code == 200) {
                callback(response)
            } else {
                throw new Error("Error Setting")
            }
        }).catch((e) => {
        console.error(e);
    });
}

export function setSetting(body: any, callback: (response: any) => (void)) {
    fetch('/api/setting', {
        method: "POST",
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        cache: "no-cache",
        body: JSON.stringify(body)
    }).then((response) => response.json())
        .then((response) => {
            if (response.code == 200) {
                callback(response)
            } else {
                throw new Error("Error Setting")
            }
        }).catch((e) => {
        console.error(e);
    });
}
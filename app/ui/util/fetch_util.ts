export async function getSetting<T>(mode: string): Promise<T> {
    return fetch(`/api/setting?type=${mode}`, {
        method: "GET",
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        cache: "no-cache"
    })
        .then((response) => response.json())
        .then((response) => {
            if (response.code != 200) {
                throw new Error("Error Setting")
            }
            return response.data
        });
}

export async function setSetting<T>(body: any): Promise<T> {
    return fetch(`/api/setting`, {
        method: "POST",
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        cache: "no-cache",
        body: JSON.stringify(body)
    })
        .then((response) => response.json())
        .then((response) => {
            if (response.code != 200) {
                throw new Error("Error Setting")
            }
            return response.data
        });
}
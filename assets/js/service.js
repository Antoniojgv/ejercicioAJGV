export const apiUrl = 'https://jsonplaceholder.typicode.com';

export function request(type, url, data = null, dataType = 'json') {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: type,
            url: url,
            data: data,
            dataType: dataType,
            success: resolve,
            error: reject
        });
    });
}
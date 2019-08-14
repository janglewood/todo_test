function logger(res, data) {
    console.log('data received');
    res(data);
}

export function mockPostRequest() {
    return new Promise(resolve => 
        setTimeout(logger.bind(null, resolve, {success: true}), 2000));
}
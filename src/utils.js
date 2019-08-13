export function mockPostRequest() {
    return new Promise(resolve => setTimeout(() => resolve({success: true}), 100));
}
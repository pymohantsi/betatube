export default defineEventHandler(async (event) => {
    const body = readBody(event);
    return {body};
});

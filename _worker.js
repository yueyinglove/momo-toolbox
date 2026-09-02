export default {
  async fetch(request, env, ctx) {
    const targetUrl = new URL(request.url);
    targetUrl.hostname = "78.154.103.42";
    targetUrl.port = "9143";
    targetUrl.protocol = "http:";
    return await fetch(targetUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: "follow"
    });
  }
};

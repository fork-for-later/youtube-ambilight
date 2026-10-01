export default class ErrorReporter {
  static script = globalThis.yt ? 'injected' : 'content';

  static captureException(ex) {
    if (ex?.details) {
      console.error(ex, ex.details);
    } else {
      console.error(ex);
    }
  }
}

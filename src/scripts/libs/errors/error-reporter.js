export default class ErrorReporter {
  static captureException(ex) {
    if (ex?.details) {
      console.error(ex, ex.details);
    } else {
      console.error(ex);
    }
  }
}

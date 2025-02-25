export function getDefaultTextElement(element?: string | null) {
  switch (element) {
    case "h1": {
      return "h1";
    }
    case "h2": {
      return "h2";
    }
    case "h3": {
      return "h3";
    }
    case "h4": {
      return "h4";
    }
    case "h5": {
      return "h5";
    }
    case "h6": {
      return "h6";
    }
    case "p": {
      return "p";
    }
    default: {
      return "p";
    }
  }
}

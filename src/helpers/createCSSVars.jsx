function createCSSVar(items, prefix = "-") {
  return Object.entries(items).flatMap(([key, value]) => {
    const varName = `${prefix}-${key}`;
    if (typeof value === "object") return createCSSVar(value, varName);
    return `${varName}:${value}`;
  });
}

export function createCSSVars(vars) {
  return createCSSVar(vars).join(";");
}

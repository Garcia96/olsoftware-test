import React from "react";

function snakeCaseToCamelCaseMiddleware(data) {
  if (Array.isArray(data)) {
    return data.map((item) => snakeCaseToCamelCaseMiddleware(item));
  } else if (data !== null && typeof data === "object") {
    const transformedData = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const camelCaseKey = key.replace(/_([a-z])/g, (match, letter) =>
          letter.toUpperCase()
        );
        transformedData[camelCaseKey] = snakeCaseToCamelCaseMiddleware(
          data[key]
        );
      }
    }
    return transformedData;
  }
  return data;
}

const snakeToCamelMiddleware = ({ data }) => {
  const transformedData = snakeCaseToCamelCaseMiddleware(data);
  console.log(transformedData);
  return transformedData;
};

export { snakeToCamelMiddleware };

module.exports = {
  extends: ["react-app", "airbnb", "airbnb/hooks"],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/prefer-default-export": "off",
    "jsx-a11y/label-has-associated-control": ["error", {
      assert: "either"
    }]
  },
  settings: {
    "import/resolver": {
      "node": {
        "moduleDirectory": ["node_modules", "src/"]
      }
    }
  },
  globals: {
    'registerPaint': true,
  }
};

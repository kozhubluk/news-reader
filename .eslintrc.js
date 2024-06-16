module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files":  ["*.tsx", "*.ts"],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        parser: "@typescript-eslint/parser",
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": ["error", 4],
        "@typescript-eslint/indent": ["error", 4],
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "no-unused-vars": "warn",
        "react/jsx-props-no-spreading": "warn",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "@typescript-eslint/no-floating-promises": "off"
    }
}

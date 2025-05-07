# Block 24 | Context

[Slides](https://docs.google.com/presentation/d/e/2PACX-1vSBssgm8ae2oeYt2yyoMd855OlRyOwC8GeDVBnwucNCnDkZlKsDw6gXyTGibq-xSyO5aeTx4RlJ3h1m/pub?start=false&loop=false&delayms=3000)\
[Guided Practice: Does It Glow?](https://github.com/FullstackAcademy/Unit3.DoesItGlow)\
[Workshop: Whack a Mole](https://github.com/FullstackAcademy/Unit3.WhackAMole)\
[Workshop Solution: Whack a Mole](https://github.com/FullstackAcademy/Unit3.WhackAMole.Solution)

## Action Items

- [ ] Complete and submit Block 24: Competency Check.
- [ ] Complete and submit Workshop: Whack a Mole.

## Learning Objectives

- Create and provide context to manage shared state and replace repetitive prop drilling
- Subscribe components to provided context via a custom hook
- Pass JSX as children to components
- Inspect components with [React Developer Tools](https://react.dev/learn/react-developer-tools)
- Use [refs](https://react.dev/learn/referencing-values-with-refs) to remember information without triggering new renders

## Vocabulary

- context, provider, consume
- [hook](https://react.dev/reference/react/hooks)
- `createContext`, `useContext`, `Context.Provider`
- `children`
- `useRef`

## Resources

- Check out the commit history of [context branch of the Proper Plants solution](https://github.com/FullstackAcademy/Unit3.ProperPlants.Solution/tree/context) for an example of how to refactor an app from prop drilling to using context.

## Demo Guide

- Create CartContext.jsx
- Extract cart logic from App.jsx to CartContext.jsx

  1. Create the context

  - The `children` prop allows you to define any child components that you want
  - The `value` prop to CartContext.Provider determines the value that is being provided.
  - It is also the value that the child components will consume.

  2. Create a Provider for that context
  3. Create a custom hook to consume that context

- Wrap App in CartProvider in main.jsx
- Refactor Plants to use CartContext
- Refactor Cart to use CartContext

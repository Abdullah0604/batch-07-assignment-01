# Blog 01: কেন `any` কে "Type Safety Hole" বলা হয় এবং কেন `unknown` Safer Choice?

## ভূমিকা

TypeScript এর মূল উদ্দেশ্য হলো javascript এ type safety দেওয়া। কিন্তু type `any` development mode এ কোনো রকম type checking করে না। অন্যদিকে `unknown` development mode এ type checking এর মাধ্যমে type safety দেয়। এই ব্লগে আমরা দেখব কেন type `any` safer type নয় , কেন `unknown` safer, এবং সেই সাথে আমরা জানব type narrowing কী।

---

## কেন `any` কে Type Safety Hole বলা হয়

`any` ব্যবহার করলে typescript development mode এ type checking করে না। ফলে আমরা যেকোনো type এর value এর মাধ্যমে আমরা যেকোন operation চালালেও, development mode এ আমরা কোনো রকম error পাবো না। এই ক্ষেত্রে run time error পাওয়ার possibility বেশি। তাই `any` কে Type Safety Hole বলা হয়।

### উদাহরণ:

```ts
let value: any = "Hello";

value.push(10); // No error, but unsafe
```

---

## unknown কেন safer?

`unknown` ব্যবহার করলে typescript development mode এ type checking করতে পারে। ফলে আমরা যেকোনো type এর value এর মাধ্যমে আমরা যেকোন operation চালালেও, development mode এ আমরা কোনো রকম error পাবো । এই ক্ষেত্রে run time error পাওয়ার possibility থাকে না। তাই `unknown` কে safer type বলা হয়ে থাকে।

### উদাহরণ:

```ts
let value: unknown = "Hello";

value.push(10); //  error, তবে safe
```

---

## Type Narrowing কী?

কোনো সাধারণ type যেমন `unknown` কে type checking এর মাধ্যমে specific type এ convert করাকে মূলত type narrowing বলা হয়ে থাকে।

### উদাহরণ:

```ts
function printInput(input: unknown) {
  if (typeof data === "number") {
    console.log(data.toUpperCase()); // এখন typescript জানে এখানে input কি ধরনের data
  }
}
```

#### এখান থেকে বুঝা যায়, type `any` এর পরিবর্তে type `unknown` করা উচিত

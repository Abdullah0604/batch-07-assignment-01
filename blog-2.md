# Blog 02: Generics কীভাবে Reusable এবং Strictly Typed Components তৈরি করতে সাহায্য করে

## ভূমিকা:

generics হলো typescript এর strong feature, যার মাধ্যমে আমরা এমন `function`, `class` তৈরি করতে পারি, যেগুলো বিভিন্ন `data` এর সাথে খুব ভালো ভাবে কাজ করার পাশাপাশি type safety দিতে পারে।

---

## Generics কেন দরকার?

আমাদের এমন কিছু কাজ থাকে যা repeated। এই repeated কাজের জন্য আমরা যদি type `any` ব্যবহার করি তবে সেটি type safety নষ্ট করে। এই ক্ষেত্রে generics এই duplicated কাজ কে replace করে।

## Generics কীভাবে সমস্যা সমাধান করে?

শুরুতে generics type placeholder ব্যবহার করে, এবং পরে তা actual type দিয়ে replace হয়।

### উদাহরণ:

```ts
function printValue<T>(value: T): T {
  return value;
}

printValue<number>(20); // type: number
printValue<string>("Abdullah"); // type: string
```

## Generics এর সুবিধা

- code কে reusable করা যায়
- type safety থাকে
- any ব্যবহার করতে হয় না
- bug কমে যায়
- একবার code লিখলে multiple type এ ব্যবহার করা যায়

#### তাই code কে আরো বেশি effective and professional করতে typescript এর generics use করা ভালো।

// Numeric Enums and Reverse Mappings

enum Sizes {
    Small,
    Medium,
    Large
}

// enums are extendible
enum Sizes {
    ExtraLarge = 3
}

console.log(Sizes.Medium);
console.log(Sizes.Large, Sizes[Sizes.Large]);

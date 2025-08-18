const products = [
    {
        id: 1,
        name: 'Strawberry',
        price: 3.0,
        category: 'Fruits',
        image:"https://i.pinimg.com/736x/48/32/7b/48327baffcf427874aeeabe915abbf94.jpg"
    },
    {
        id: 2,
        name: 'Butter',
        price: 3.5,
        category: 'Dairy',
        image: 'https://i.pinimg.com/1200x/52/59/c8/5259c87ef3d66c0aed75098c80bcc055.jpg'
    },
    {
        id: 3,
        name: 'Eggs',
        price: 2.05,
        category: 'Dairy',
        image: 'https://i.pinimg.com/736x/1b/3e/0b/1b3e0b856b8937e09353290c7f9e3f88.jpg'
    },
    {
        id: 4,
        name: 'Cabbage',
        price: 3.0,
        category: 'Vegetables',
        image: 'https://i.pinimg.com/736x/99/f8/f0/99f8f070731b4525631bb49de3477c0f.jpg'
    },
    {
        id: 5,
        name: 'Eggplant',
        price: 4.0,
        category: 'Vegetables',
        image: 'https://i.pinimg.com/736x/fb/60/4f/fb604f66ad44553bc61e1f34675dec33.jpg'
    },
    {
        id: 6,
        name: 'Shrimp',
        price: 3.5, category: 'SeaFood',
        image: "https://i.pinimg.com/1200x/b1/19/6a/b1196a2f66ba89282b1adb972f43235b.jpg"
    },
    {
        id: 7,
        name: 'Kiwi',
        price: 2.05,
        category: 'Fruits',
        image: 'https://i.pinimg.com/736x/d6/6b/25/d66b257fa3fb12c27b3b0e5f9ebf3885.jpg'
    },
    {
        id: 8,
        name: 'Green Capsicum',
        price: 4.0,
        category: 'Vegetables',
        image: 'https://i.pinimg.com/1200x/71/49/c6/7149c6b7341c11f8cef3eff13ecc6913.jpg'
    },
    {
        id: 9,
        name: 'Broccoli',
        price: 2.0,
        category: 'Vegetables',
        image: 'https://i.pinimg.com/736x/14/9b/e7/149be76b4b21bd0a79436859b70ed45b.jpg'
    },
    {
        id: 10,
        name: 'Yogurt',
        price: 3.0,
        category: 'Dairy',
        image: 'https://i.pinimg.com/1200x/e3/56/2b/e3562b11f03c4d8cec4bc44a5dd89f2a.jpg'
    },
    {
        id: 11,
        name: 'Beef',
        price: 8.0,
        category: 'Meat',
        image:'https://i.pinimg.com/736x/98/b7/70/98b77060b988e95d213051eb55f452f8.jpg'
    },
    {
        id: 12,
        name: 'Chicken Breast',
        price: 7.0,
        category: 'Meat',
        image: 'https://i.pinimg.com/1200x/cd/6c/28/cd6c286036759498ccac42dfdea6c715.jpg'
    },
    {
        id: 13,
        name: 'Kale Leaves',
        price: 3.0,
        category: 'Vegetables',
        image: 'https://i.pinimg.com/736x/56/85/ad/5685add80b84acb9fa748123157df2a0.jpg'
    },
    {
        id: 14,
        name: 'Mozzarella Cheese',
        price: 7.0,
        category: 'Dairy',
        image: 'https://i.pinimg.com/736x/0f/78/93/0f789325eb0b15e84ac1998693920046.jpg'
    },
    {
        id: 15,
        name: 'Condensed Milk',
        price: 5.0,
        category: 'Dairy',
        image: 'https://i.pinimg.com/1200x/b9/25/64/b92564b4874579f2d6e0c88e22440119.jpg'
    },
    {
        id: 16,
        name: 'Salmon Filet ',
        price: 4.0,
        category: 'SeaFood',
        image: 'https://i.pinimg.com/1200x/f2/eb/19/f2eb1987831412494ec722b068f278e6.jpg'
    },
    {
        id: 17,
        name: 'Banana ',
        price: 2.0,
        category: 'Fruits',
        image: "https://i.pinimg.com/736x/02/49/5f/02495fb1b8bd32a24fb8eb483a18a074.jpg"
    },
    {
        id: 18,
        name: 'Milk Bottle (3)',
        price: 8.0,
        category: 'Dairy',
        image: 'https://i.pinimg.com/736x/28/de/45/28de450149f4a88bb0c67699c4009782.jpg'
    },
    {
        id: 19,
        name: 'PineApple',
        price: 5.0,
        category: 'Fruits',
        image: 'https://i.pinimg.com/736x/91/ca/26/91ca26deee1b15c833d473ccac9c0aa7.jpg'
    },
    {
        id: 20,
        name: 'Tofu Cubes',
        price: 4.0,
        category: 'Dairy',
        image: 'https://i.pinimg.com/1200x/e5/91/d6/e591d6db358cb7c9ba90866cf21f4581.jpg'
    },
    {
        id: 21,
        name: 'Tilapia Fish',
        price: 3.0,
        category: 'SeaFood',
        image: 'https://i.pinimg.com/1200x/43/42/da/4342da74b40ce516529bf84ab2357e15.jpg'
    },
    {
        id: 22,
        name: 'Slice Cheese',
        price: 5.0,
        category: 'Dairy',
        image: 'https://i.pinimg.com/736x/f9/49/ad/f949ada7326977eb5f82772de618a77c.jpg'
    },
    {
        id: 23,
        name: 'Ricotta Cheese',
        price: 7.0,
        category: 'Dairy',
        image: 'https://i.pinimg.com/736x/87/d5/f7/87d5f7c8d3a3adfd05d3ddba76d2843e.jpg'
    },
    {
        id: 24,
        name: 'Grapes',
        price: 3.0,
        category: 'Fruits',
        image: 'https://i.pinimg.com/736x/24/98/8f/24988ff8ecbeca2ab1ae2dc279bc6b42.jpg'
    },
    {
        id: 25,
        name: 'Lettuce Leaf',
        price: 3.0,
        category: 'Vegetables',
        image: 'https://i.pinimg.com/736x/8d/a3/7d/8da37d5a411790fe65657a71a41d9928.jpg'
    },
];


export default products
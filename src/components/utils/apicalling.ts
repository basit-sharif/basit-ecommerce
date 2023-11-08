import refreshData from "./action";

export async function allProductFetherFromSanity() {
    const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-10-17/data/query/production?query=*%5B_type+%3D%3D+%27products%27%5D%7B%0A++image%2C%0A++++productname%2C%0A++++quantity%2C%0A++++price%2C%0A++++slug%2C%0A++++size%2C%0A++++description++++%2C%0A++producttype%2c_id%0A%7D`, {
        next: {
            revalidate: 120
        }
    });
    if (!res.ok) {
        return "Error"
    }
    return res.json();
};

export async function maleProductsFromSanity() {
    const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-10-17/data/query/production?query=*%5B_type+%3D%3D+%27products%27+%26%26+producttype+%3D%3D+%27men%27+%5D%7B%0A++image%2C%0A++++productname%2C%0A++++quantity%2C%0A++++price%2C%0A++++slug%2C%0A++++size%2C%0A++++description%2C%0A++producttype%2c_id%0A%7D`, {
        next: {
            revalidate: 120
        }
    });
    if (!res.ok) {
        return "Error"
    }
    return res.json();
}

export async function femaleProductsFromSanity() {
    const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-10-17/data/query/production?query=*%5B_type+%3D%3D+%27products%27+%26%26+producttype+%3D%3D+%27female%27+%5D%7B%0A++image%2C%0A++++productname%2C%0A++++quantity%2C%0A++++price%2C%0A++++slug%2C%0A++++size%2C%0A++++description%2C%0A++producttype%2c_id%0A%7D`, {
        next: {
            revalidate: 120
        }
    });
    if (!res.ok) {
        return "Error"
    }
    return res.json();
}
export async function kidsProductsFromSanity() {
    const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-10-17/data/query/production?query=*%5B_type+%3D%3D+%27products%27+%26%26+producttype+%3D%3D+%27kids%27+%5D%7B%0A++image%2C%0A++++productname%2C%0A++++quantity%2C%0A++++price%2C%0A++++slug%2C%0A++++size%2C%0A++++description%2C%0A++producttype%2c_id%0A%7D`, {
        next: {
            revalidate: 120
        }
    });
    if (!res.ok) {
        return "Error"
    }
    return res.json();
};
export async function searchProductsFromSanity(search: string) {
    const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-10-17/data/query/production?query=*%5B_type+%3D%3D+%27products%27+%26%26+productname+match+%27${search}%27+%5D%7B%0A++image%2C%0A++++productname%2C%0A++++quantity%2C%0A++++price%2C%0A++++slug%2C%0A++++size%2C%0A++++description%2C%0A++producttype%2c_id%0A%7D`);
    if (!res.ok) {
        return "Error"
    }
    return res.json();
};

export async function detailOfSingleProductFromSanity(search: string) {
    const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-10-17/data/query/production?query=*%5B_type+%3D%3D+%27products%27+%26%26+slug.current+%3D%3D+%27${search}%27%5D%7B%0A++image%2C%0A++++productname%2C%0A++++quantity%2C%0A++++price%2C%0A++++slug%2C%0A++++size%2C%0A++++description%2C%0A++producttype%2c_id%0A%7D`);
    if (!res.ok) {
        return "Error"
    }
    return res.json();
}



export async function getAllCartProductByUserid(userId: string) {
    const res = await fetch(`https://basit-ecommerce.vercel.app/api/cartfunc?userid=${userId}`);

    if (!res.ok) {
        return "Error"
    }
    return res.json();
}

export async function productFromIdCart(productId: string) {
    const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-10-17/data/query/production?query=*%5B_type+%3D%3D+%27products%27+%26%26+_id+%3D%3D+%27${productId}%27%5D%7B%0A++image%2C%0A++++productname%2C%0A++++quantity%2C%0A++++price%2C%0A++++slug%2C%0A++++size%2C%0A++++description++++%2C%0A++producttype%2C%0A++++_id%0A%7D`);

    if (!res.ok) {
        return "Error"
    }

    return res.json();
}


export async function addToCartApiCall(userid: string, productid: string) {
    const res = await fetch("https://basit-ecommerce.vercel.app/api/cartfunc", {
        mode: "no-cors",
        method: "POST",
        body: JSON.stringify({
            userid: userid,
            productid: productid,
            quantity: 1,
        })
    });

    return "OK"
};

export async function updateCartItems(userid: string, productid: string, quantity: number) {
    // const url = `http://localhost:3000/api/cartfunc`;
    const url = `https://basit-ecommerce.vercel.app/api/cartfunc`;

    const res = await fetch(url, {
        // mode: "no-cors",
        method: "PUT",
        body: JSON.stringify({
            userid: userid,
            productid: productid,
            quantity: quantity,
        })
    });


    if (!res.ok) {
        return "Error"
    }
    await refreshData();
    return "OK"
}
export async function handleDelete(userId: string, productId: string) {
    const url = `https://basit-ecommerce.vercel.app/api/cartfunc?userid=${userId}&productid=${productId}`;
    // const url = `http://localhost:3000/api/cartfunc?userid=${userId}&productid=${productId}`;

    const res = await fetch(url, {
        method: "DELETE",
    })


    await refreshData();
}
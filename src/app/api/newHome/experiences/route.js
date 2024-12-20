export async function GET() {
  try {
    const data = {
      experiences: {
        one: {
          id: "firstExp",
          title: "Cooking with Chefs",
          subtitle: "Lorem Iipsum Elit",
          image: "/images/mediaHero.webp"
        },
        two: {
          id: "firstExp",
          title: "Cooking with Chefs",
          subtitle: "Lorem Iipsum Elit",
          image: "/images/mediaHero.webp"
        },
        three: {
          id: "firstExp",
          title: "Cooking with Chefs",
          subtitle: "Lorem Iipsum Elit",
          image: "/images/mediaHero.webp"
        },
        four: {
          id: "firstExp",
          title: "Cooking with Chefs",
          subtitle: "Lorem Iipsum Elit",
          image: "/images/mediaHero.webp"
        }
      }
    };
    return new Response(JSON.stringify({ data }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Database connection failed" + error }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
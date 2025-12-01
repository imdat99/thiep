import { Hono } from "hono";
import { renderer } from "./renderer";
import { Invitation } from "./invi";
import imgs from "./img-list.json" assert { type: "json" };
const app = new Hono();

app.use(renderer);

app.get("/", (c) => {
  return c.render(<Invitation />);
});
app.get("/image-list", async (c) => {
  return c.json(
    imgs.sort(() => 1 - 0.5).map((item, index) => ({
      id: item.data.id,
      url: `https://p9-sg.tiktokcdn.com/tiktok-obj/${item.data.id}~tplv-photomode-zoomcover:480:480.jpeg`,
      title: "Tôi và nàng " + index,
      user: {
        name: "t.thucanhh",
        avatar: `https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-1/484555529_9848893648454465_5467920182509863571_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=lf3crDBLESIQ7kNvwF5f5dL&_nc_oc=AdnMibAKkNdc6YnMK-8iozqAmhGW0Sy9etLzAj--2_Mgqi21zxCVKGbJ7SYFTRgsn9U&_nc_zt=24&_nc_ht=scontent.fhan19-1.fna&_nc_gid=-NLWGcKFQe_6_o9FN5T9_w&oh=00_AfjhVoBgpNjzoX9fSKdf4C-kHJdWFWDhBTMxurA62WNZvw&oe=69338493`,
      },
    }))
  );
});
app.get("/image/:id", async (c) => {
  const id = c.req.param("id");
  const img = imgs.find((item) => item.data.id === id);
  return c.json(img);
});
app.get("/Gallery", async (c) => {
  const { default: Gallery } = await import("./Gallery");
  return c.render(<Gallery />);
});
export default app;

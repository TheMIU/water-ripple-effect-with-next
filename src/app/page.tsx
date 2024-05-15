import RippleEffect from "@/components/RippleEffect";

export default function Home() {
  return (
    <>
      <RippleEffect />

      <div style={{ color: "white" }}>
        <h1>
          Line break
        </h1>
        Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Aut iure accusantium voluptatibus, exercitationem placeat in. Nulla quo saepe aut esse excepturi doloribus veniam voluptatibus iusto. Repudiandae ipsam atque nisi quia.
      </div>

      <RippleEffect />
    </>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactDOM from "react-dom/client";
import tailwindCSS from "./generated-styles.css?inline";

const modules = import.meta.glob("./components/*.tsx", { eager: true });

Object.entries(modules).forEach(([path, mod]) => {
  const componentName = path.split("/").pop()?.replace(".tsx", "") || "";
  const tagName =
    componentName.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

  const Component = (mod as any).default;

  class StyledElement extends HTMLElement {
    static get observedAttributes() {
      // You can explicitly list your props here instead of dynamically generating them.
      // Example: return ["label", "title"];
      // For generic auto-collection, leave it empty and handle manually in renderReact.
      return [];
    }

    private root?: ReactDOM.Root;
    private shadow?: ShadowRoot;

    connectedCallback() {
      // Create Shadow DOM
      this.shadow = this.attachShadow({ mode: "open" });

      // Inject Tailwind CSS
      const style = document.createElement("style");
      style.textContent = tailwindCSS;
      this.shadow.appendChild(style);

      // Mount point for React
      const mount = document.createElement("div");
      this.shadow.appendChild(mount);

      this.root = ReactDOM.createRoot(mount);
      this.renderReact();
    }

    attributeChangedCallback() {
      this.renderReact();
    }

    renderReact() {
      if (!this.shadow || !this.root) return;

      // Collect all attributes from the element
      const props: Record<string, any> = {};
      for (const attr of Array.from(this.attributes)) {
        props[attr.name] = attr.value;
      }

      // Include children (innerHTML)
      const slot = (
        <span
          dangerouslySetInnerHTML={{
            __html: this.innerHTML,
          }}
        />
      );

      // Render the React component with props + children
      this.root.render(<Component {...props}>{slot}</Component>);
    }
  }

  customElements.define(tagName, StyledElement);
  console.log(`✅ Registered <${tagName}>`);
});

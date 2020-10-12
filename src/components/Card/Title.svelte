<script>
  import { ClassBuilder } from "../../utils/classes.js";

  export const hover = true;
  export let title = "";
  export let subheader = "";
  export let subheaderClass = "";
  export let avatar = "";

  const classesDefault = "flex px-4 py-2 items-center";
  export let classes = classesDefault;



  const cb = new ClassBuilder(classes, classesDefault);

  $: c = cb
    .flush()
    .add(classes, true, classesDefault)
    .add($$props.class)
    .get();
</script>

<div class={c}>
  <div>
    <img
      class="rounded-full"
      width="44"
      height="44"
      src={avatar}
      alt="avatar"
      class:hidden={!avatar} />
  </div>
  <div class="pl-4 py-2">
    <div class:hidden={!title} class="font-medium text-lg text-left">{title}</div>
    <div class={subheaderClass} class:hidden={!subheader}>
      {subheader}
    </div>
  </div>
</div>

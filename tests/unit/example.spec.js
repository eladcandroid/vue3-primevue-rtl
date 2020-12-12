import { mount, shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import Counter from "@/components/Counter.vue";
import store from "@/store";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe("Counter.vue", () => {
  it("increment initial counter by 1", async () => {
    const wrapper = mount(Counter, {
      global: {
        plugins: [store]
      }
    });
    await wrapper.find("button").trigger("click");
    const count = wrapper.get('[data-test="count"]');
    expect(count.text()).toMatch("1");
  });

  it("increment a counter by 1", async () => {
    const wrapper = mount(Counter, {
      global: {
        plugins: [store]
      }
    });
    const beforeIncrement = +wrapper.get('[data-test="count"]').text();
    await wrapper.find("button").trigger("click");

    const count = wrapper.get('[data-test="count"]');
    expect(count.text()).toMatch("" + (beforeIncrement + 1));
  });
});

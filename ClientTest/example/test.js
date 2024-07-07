const { test, expect } = require("@playwright/test");

async function createDummyTodos(page, count = 3) {
    for (let i = 0; i < count; i++) {
        await page.type("#newTodo", `할 일 ${i}`);
        await page.click('button[onclick="addTodo()"]');
    }
}

test.describe("Todo List 기능 구현하기", () => {
    test("TC 1. 할 일이 정상적으로 생성된다.", async ({ page }) => {
        await page.goto("./base");

        const todoText = "새로운 할 일";
        await page.type("#newTodo", todoText);
        await page.click('button[onclick="addTodo()"]');

        await page.waitForSelector(".todo", { timeout: 100 });
        const createdTodoText = await page.$eval(".todo", (el) => el.textContent);
        console.assert(
        createdTodoText.includes(todoText),
        "새로운 할 일이 추가되지 않았습니다."
        );
    });

test("TC 2. 작성된 할 일이 정상적으로 조회된다.", async ({ page }) => {
    await page.goto("./base");
    await createDummyTodos(page);

    for (let i = 0; i < 3; i++) {
    const todoText = await page.$eval(
        `.todo:nth-child(${i + 1})`,
        (el) => el.textContent
    );
    console.assert(
        todoText.includes(`할 일 ${i}`),
        `할 일 ${i}가 목록에 표시되지 않았습니다.`
    );
    }
});
  
test("TC 3. 작성된 할 일이 정상적으로 삭제된다.", async ({ page }) => {
        await page.goto("./base");

        await createDummyTodos(page);
        await page.click(".todo button", { timeout: 100 });

        const todos = await page.$$(".todo");
        console.assert(todos.length === 2, "할 일이 정확하게 삭제되지 않았습니다.");
    });
});
  
test.describe("게시물 목록 페이지 테스트", () => {
  test("TC 1. 게시물 목록이 올바르게 표시되는 기능이 적절하게 동작한다.", async ({
    page,
  }) => {
    await page.goto("./base");
    await page.waitForSelector("#postList div");

    const postCards = await page.$$("#postList div");
    expect(postCards.length).toBeGreaterThan(0);

    for (const postCard of postCards) {
      const title = await postCard.$("h3");
      const body = await postCard.$("p");
      expect(title).toBeTruthy();
      expect(body).toBeTruthy();
    }
  });

  test("TC 2. 작성자 별 필터링 기능이 적절하게 동작한다.", async ({ page }) => {
    await page.goto("./base");
    await page.waitForSelector("#postList div");

    const select = await page.$("#authorFilter");
    await select.selectOption({ value: "1" });

    const postCards = await page.$$("#postList div");
    const filteredPosts = await page.$$eval("#postList div h3", (nodes) =>
      nodes.filter((node) => node.textContent.includes("작성자 1"))
    );
    expect(filteredPosts.length).toBe(postCards.length);
  });

  test("TC 3. 작성자 별 필터링 기능이 적절하게 동작한다.", async ({ page }) => {
    await page.goto("./base");
    await page.waitForSelector("#postList div");

    const select = await page.$("#authorFilter");
    await select.selectOption({ value: "2" });

    const postCards = await page.$$("#postList div");
    const filteredPosts = await page.$$eval("#postList div h3", (nodes) =>
      nodes.filter((node) => node.textContent.includes("작성자 1"))
    );
    expect(filteredPosts.length).not.toBe(postCards.length);
  });

  test("TC 4. 작성자 선택 옵션은 10개까지 존재한다.", async ({ page }) => {
    await page.goto("./base");
    const authorOptions = await page.$$("#authorFilter option");
    expect(authorOptions.length).toBe(11);
  });

  test("TC 5. 게시물에는 작성자 정보가 적절하게 포함되어있다.", async ({
    page,
  }) => {
    await page.goto("./base");
    await page.waitForSelector("#postList div");

    const postCards = await page.$$("#postList div");

    for (const postCard of postCards) {
      const title = await postCard.$eval("h3", (node) => node.textContent);
      expect(title.startsWith("작성자")).toBeTruthy();
    }
  });

  test("TC 6. 작성자를 필터링하면 해당 작성자의 게시물만 표시된다.", async ({
    page,
  }) => {
    await page.goto("./base");
    await page.waitForSelector("#postList div");

    const select = await page.$("#authorFilter");
    await select.selectOption({ value: "1" });

    const postCards = await page.$$("#postList div");
    const filteredPosts = await page.$$eval("#postList div h3", (nodes) =>
      nodes.filter((node) => node.textContent.includes("작성자 1"))
    );
    expect(filteredPosts.length).toBe(postCards.length);
  });
});

const sleep = (time: number) => new Promise((resolve: any) => setTimeout(() => resolve(), time));

async function submitForm(form = {}) {
  await sleep(1000);
  return { success: true };
}

export { submitForm };

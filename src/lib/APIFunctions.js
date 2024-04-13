const ApiUrl = import.meta.env.VITE_API_URL;

export const uploadImg = async (route, formData) => {
  const uploadImg = await fetch(`${ApiUrl}${route}`, {
    method: "POST",
    body: formData,
  });
  const response = await uploadImg.json();
  return response;
};

export const createData = async (route, data) => {
  const POST = await fetch(`${ApiUrl}${route}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const response = await POST.json();
  return response;
};

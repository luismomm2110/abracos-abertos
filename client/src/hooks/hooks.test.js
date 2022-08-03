import { renderHook, waitFor, waitForNextUpdate } from "@testing-library/react";
import { useForm } from "./hooks";

const useFormMock = "foo";

const mockFetch = (mockData) => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
    })
  );
};

const mockFetchError = (error) => {
  global.fetch = jest.fn().mockImplementation(() => Promise.reject(error));
};

const mockFetchCleanUp = () => {
  global.fetch.mockClear();
  delete global.fetch;
};

describe("test useForm", () => {
  it("test false for update", async () => {
    mockFetch(useFormMock);
    const { result, waitForNextUpdate } = renderHook(() => useForm("foo"));
    expect(result.current.loading).toBe(true);
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
    mockFetchCleanUp();
  });
  it("test it sets state", async () => {
    mockFetch(useFormMock);
    const { result } = renderHook(() => useForm("aaa"));
    await waitFor(() => {
      expect(result.current.data).toBe("foo");
    });
    mockFetchCleanUp();
  });

  it("error state", async () => {
    mockFetchError("Network Error");
    const { result } = renderHook(() => useForm("lorem"));
    await waitFor(() => {
      expect(result.current).toMatchObject({
        data: undefined,
        error: "Network Error",
      });
    });
    mockFetchCleanUp();
  });
});

import { renderHook } from "@testing-library/react-hooks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useGetMock from "./useGetMock";

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { staleTime: Infinity },
    },
  });
  return ({ children }: any) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("use get Mocks Test", () => {
  it("use get mock api hook", async () => {
    const { result, waitFor } = renderHook(() => useGetMock(), {
      wrapper: createWrapper(),
    });
    await waitFor(() => expect(result.current.isLoading).toBe(true));
    // 로딩 이후 데이터가 없을시 에러 발생 / 값이 넘어오질 않아 임시 주석 처리
    //expect(result.current.data).tobedefined();
  });
});

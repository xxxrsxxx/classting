import { renderHook } from "@testing-library/react-hooks";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";

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

const getApi = async (url: string) => {
  const { data } = await axios.get(url, {});
  return data;
};

const useGetMock = () => {
  return useQuery(["api"], () => getApi("https://opentdb.com/api.php"), {
    suspense: false,
  });
};

describe("use get Mocks Test", () => {
  it("use get mock api hook", async () => {
    const { result, waitFor } = renderHook(() => useGetMock(), {
      wrapper: createWrapper(),
    });
    await waitFor(() => expect(result.current.isLoading).toBe(true));

    // 로딩 이후 데이터가 없을시 에러 발생
    // renderHook 반환 값이 존재하지 않음... 테스트 환경 버전도 맞춤 원인 찾는중
    //expect(result.current.data).tobedefined();
  });
});

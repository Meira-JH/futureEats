import { setCurrentPage, setSearch } from "../actions/page";

describe("Page Actions", () => {
  test("Set Current Page", () => {
    const mockSetCurrentPage = "Página selecionada";

    const action = setCurrentPage(mockSetCurrentPage);

    expect(action.type).toBe("SET_CURRENT_PAGE");
    expect(action.payload.currentPage).toBe(mockSetCurrentPage);
  });
  test("Set Search", () => {
    const mockSearch = "Sou uma pesquisa";

    const action = setSearch(mockSearch);

    expect(action.type).toBe("SET_SEARCH");
    expect(action.payload.currentSearch).toBe(mockSearch);
  });
});

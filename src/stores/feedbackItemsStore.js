import { create } from "zustand";

export const useBooksStore = create((set, get) => ({
  feedbackItems: [],
  isLoading: false,
  errorMessage: "",
  selectedCompany: "",

  getCompanyList: () => {
    return get()
      .feedbackItems.map((item) => item.company)
      .filter((company, index, array) => {
        return array.indexOf(company) === index;
      });
  },
  getFilteredFeedbackItems: () => {
    const state = get();

    return state.selectedCompany
      ? state.feedbackItems.filter(
          (feedbackItem) => feedbackItem.company === state.selectedCompany
        )
      : state.feedbackItems;
  },
  addItemToList: async (text) => {
    const hashtagWord = text.split(" ").find((word) => word.includes("#"));
    const companyName = hashtagWord ? hashtagWord.substring(1) : "";

    const newItem = {
      id: new Date().getTime(),
      text: text,
      upvoteCount: 0,
      daysAgo: 0,
      company: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
    };

    set((state) => ({
      feedbackItems: [...state.feedbackItems, newItem],
    }));

    await fetch(
      //  "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      "https://restcountries.com/v2/all",
      {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(newItem),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Origin, Content-Type",
          "Access-Control-Request-Method": "POST",
          CORS_ORIGIN: "true",
        },
      }
    );
  },

  selectCompany: (company) => {
    set(() => ({
      selectedCompany: company,
    }));
  },

  fetchBooks: async () => {
    set(() => ({
      isLoading: true,
    }));

    try {
      const response = await fetch(
        //  "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        "https://localhost:7179/api/Books"
      );

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();
      set(() => ({
        feedbackItems: data.feedbacks,
      }));
    } catch (error) {
      set(() => ({
        errorMessage: "Something went wrong. Please try again later.",
      }));
    }

    set(() => ({
      isLoading: false,
    }));
  },
}));

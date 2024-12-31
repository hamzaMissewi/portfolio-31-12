export const tailwindColorClasses = {
  //  [key: string]: React.HTMLAttributes<HTMLDivElement>["className"];
  gradient_color: {
    1: "bg-lightBackground dark:bg-gradient-to-b from-slate-900/100 via-gray-900 to-gray-300",
    2: "dark:bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900",
  },
  default_dark_light:
    "dark:bg-gray-dark dark:text-[#fff] bg-[#fff] text-gray-950",
  reversed_dark_light:
    "bg-gray-dark text-[#fff] dark:bg-[#fff] dark:text-gray-950",
  selector: "dark:bg-gray-medium dark:text-[#fff] bg-[#fff] text-gray-900",
  dark_gray:
    "dark:bg-gray-medium dark:hover:bg-gray-medium dark:text-[#fff] bg-[#fff] text-black",
  second_text:
    "text-gray-dark dark:text-white hover:text-blue-800 dark:hover:text-blue-200",
  dark_light_blue:
    "bg-blue-light dark:bg-blue-dark text-black dark:text-gray-100",
  modal_background:
    "bg-blue-light text-black dark:bg-blue-dark dark:text-gray-100",
  main_bg_blue: "dark:bg-blue-dark dark:text-[#fff] bg-[#fff] text-gray-900",
  menu_buttons:
    "dark:text-purple-dark dark:bg-[#fff] text-black bg-purple-dark",
  action_button:
    "text-slate-900 dark:text-[#fff] dark:bg-gray-dark bg-gray-light",
  main_dark_mauve:
    "dark:bg-purple-dark dark:text-[#fff] bg-[#fff] text-purple-dark",
  main_dark_yellow:
    "dark:bg-yellow-dark dark:text-[#fff] bg-yellow-light text-gray-900",
  main_yellow:
    "dark:bg-yellow-dark dark:text-[#fff] bg-yellow-light text-gray-900",
  hover_border:
    "hover:border dark:hover:border-purple-light hover:border-red-dark",
  item_box_border: "border dark:border-purple-light border-red-dark",
  centered_box: "bg-cyan-200 text-black dark:bg-black dark:text-white",
  image_shadow: "shadow-md hover:shadow-blue-500 dark:hover:shadow-gray-100",
  item_box_shadow:
    "dark:hover:shadow-cyan-500 hover:shadow-sm hover:shadow-gray-800",
  box_shadow: "shadow-md hover:dark:shadow-[#fff] hover:shadow-cyan-800",
  admin_menu_option:
    "hover:shadow-md shadow-cyan-600 cursor-pointer text-blue-dark dark:text-white hover:text-red-600",
  admin_buttons:
    "hover:text-[#ff0011] text-black dark:text-[#fff] dark:bg-purple-light bg-cyan-light hover:shadow-md shadow-cyan-600 text-black hover:text-red-600 border border-blue-500 dark:border-white",
  header: "bg-gray-light dark:bg-gray-dark text-slate-900 dark:text-[#fff]",
  select_option:
    "hover:text-black dark:hover:bg-indigo-800 dark:hover:text-[#fff] hover:bg-gray-300",
  footer:
    "text-blue-dark bg-[#fff] dark:bg-blue-dark dark:text-[#fff] text-cyan-950 bg-gray-light dark:text-white dark:bg-purple-dark",
  test: {
    1: "bg-[#fff] dark:bg-gray-800 text-slate-900 border dark:border-gray-700 border-black dark:text-[#fff] flex h-8",
    2: "bg-[#fff] text-slate-900 dark:text-[#fff] dark:bg-dark-blue dark:hover:bg-dark-footer hover:bg-light-footer",
    3: "bg-[#fff] text-slate-900 dark:text-[#fff] dark:bg-dark-blue dark:hover:bg-dark-footer",
    4: "bg-light-bg dark:bg-dark-background text-dark-blue dark:text-light-blue",
    5: "dark:text-dark-mauve dark:bg-[#fff] bg-dark-mauve text-white",
  },
};

export const tailwindFlexClasses = {
  layout_flex:
    "flex flex-col items-around justify-between h-full w-full md:items-start mx-auto md:justify-around md:flex-row",
};

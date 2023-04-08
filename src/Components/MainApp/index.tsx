import React from "react";
import { Examples, Capabilities, Limitation, Send, DownArrow } from "../../assets";
import "./style.css";
import Sidebar from "../Sidebar"

export default function index() {
  return (
    <>
      <div className="overflow-hidden w-full h-full relative">
        <div className="flex h-full flex-1 flex-col md:pl-[260px]">
          <main className="relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1">
            <div className="flex-1 overflow-hidden">
              <div className="react-scroll-to-bottom--css-kzzxx-79elbk h-full dark:bg-gray-800">
                <div className="react-scroll-to-bottom--css-kzzxx-1n7m0yu">
                  <div className="flex flex-col items-center text-sm dark:bg-gray-800">
                    <div className="text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100">
                      <h1 className="text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center">
                        ChatGPT
                      </h1>
                      <div className="md:flex items-start text-center gap-3.5">
                        <div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
                          <h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                            <Examples/>
                            Examples
                          </h2>
                          <ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
                            <button className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900">
                              "Explain quantum computing in simple terms" →
                            </button>
                            <button className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900">
                              "Got any creative ideas for a 10 year old’s
                              birthday?" →
                            </button>
                            <button className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900">
                              "How do I make an HTTP request in Javascript?" →
                            </button>
                          </ul>
                        </div>
                        <div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
                          <h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                            <Capabilities/>
                            Capabilities
                          </h2>
                          <ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
                            <li className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
                              Remembers what user said earlier in the
                              conversation
                            </li>
                            <li className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
                              Allows user to provide follow-up corrections
                            </li>
                            <li className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
                              Trained to decline inappropriate requests
                            </li>
                          </ul>
                        </div>
                        <div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
                          <h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                            <Limitation/>
                            Limitations
                          </h2>
                          <ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
                            <li className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
                              May occasionally generate incorrect information
                            </li>
                            <li className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
                              May occasionally produce harmful instructions or
                              biased content
                            </li>
                            <li className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
                              Limited knowledge of world and events after 2021
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-32 md:h-48 flex-shrink-0"></div>
                  </div>
                  <button className="cursor-pointer absolute right-6 bottom-[124px] md:bottom-[120px] z-10 rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200">
                    <DownArrow/>
                  </button>
                </div>
                <button
                  className="react-scroll-to-bottom--css-kzzxx-1tj0vk3 scroll-convo"
                  type="button"
                ></button>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2">
              <form className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
                <div className="relative flex h-full flex-1 md:flex-col">
                  <div className="flex ml-1 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center"></div>
                  <div className="flex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
                    <textarea
                      data-id="root"
                      placeholder="Send a message..."
                      className="m-0 w-full resize-none border-0 bg-transparent p-0 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent pl-2 md:pl-0"
                      style={{maxHeight: "200px", height: "24px", overflowY: "hidden"}}
                    ></textarea>
                    <button
                      className="absolute p-1 rounded-md text-gray-500 bottom-1.5 md:bottom-2.5 hover:bg-gray-100 enabled:dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent right-1 md:right-2 disabled:opacity-40"
                    //   disabled=""
                    >
                      <Send/>
                    </button>
                  </div>
                </div>
              </form>
              <div className="px-3 pt-2 pb-3 text-center text-xs text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6">
                <a
                  href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  ChatGPT Mar 14 Version
                </a>
                . Free Research Preview. Our goal is to make AI systems more
                natural and safe to interact with. Your feedback will help us
                improve.
              </div>
            </div>
          </main>
        </div>
        <Sidebar/>
      </div>
    </>
  );
}

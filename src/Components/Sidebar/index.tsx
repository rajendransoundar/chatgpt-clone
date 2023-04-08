import React from "react";
import {
  New,
  Chat,
  Delete,
  Upgrade,
  Light,
  Updates,
  Logout,
} from "../../assets";

export default function index() {
  const Chats = [
    {
      label: "How to learn React",
    },
    {
      label: "React functional component",
    },
    {
      label: "Javascript Es6 Features",
    },
    {
      label: "How to learn React",
    },
    {
      label: "How to learn React",
    },

    {
      label: "How to learn React",
    },
  ];
  return (
    <>
      <div className="dark hidden bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col">
        <div className="flex h-full min-h-0 flex-col ">
          <div className="scrollbar-trigger flex h-full w-full flex-1 items-start border-white/20">
            <nav className="flex h-full flex-1 flex-col space-y-1 p-2">
              <a className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-2 flex-shrink-0 border border-white/20">
                <New />
                New chat
              </a>
              <div className="flex-col flex-1 overflow-y-auto border-b border-white/20 -mr-2">
                <div className="flex flex-col gap-2 text-gray-100 text-sm">
                  {Chats?.map((chat, idx) => (
                    <>
                      <a className="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 group">
                        <Chat />
                        <div className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
                          {chat.label}
                          <div className="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-900 group-hover:from-[#2A2B32]"></div>
                        </div>
                      </a>
                    </>
                  ))}
                  <button className="btn relative btn-dark btn-small m-auto mb-2"><div className="flex w-full items-center justify-center gap-2">Show more</div></button>
                </div>
              </div>
              <a className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm">
                <Delete/>
                Clear conversations
              </a>
              <a className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm">
                <span className="flex w-full flex-row justify-between">
                  <span className="gold-new-button flex items-center gap-3">
                    <Upgrade/>
                    Upgrade to Plus
                  </span>
                  <span className="rounded-md bg-yellow-200 py-0.5 px-1.5 text-xs font-medium uppercase text-gray-800">
                    NEW
                  </span>
                </span>
              </a>
              <a className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm">
                <Light/>
                Light mode
              </a>
              <a
                href="https://help.openai.com/en/collections/3742473-chatgpt"
                target="_blank"
                className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"
              >
                <Updates/>
                Updates &amp; FAQ
              </a>
              <a className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm">
                <Logout/>
                Log out
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

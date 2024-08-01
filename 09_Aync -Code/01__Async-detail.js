// ******* JavaScript ******* ⤵

/*
 *** Synchronous ***
 *** Single threaded ***

 Synchronous : ⤵
            javaScript is synchrouous, sync mean they excuted there code one by one.
Single thread : ⤵
             javaScript never feel us that they are single threaded (slow language).

    it's a Default javaScript talk.⤴

    ➡ Excution Context ⤵
     ⬇   excute one line of code at a time
     ⬇   ➡ console log ➡ 1    | each operation    
            wiats for the last one
     ⬇    ➡ console log ➡ 2   |to complete before execution.
     ↘  
        Call Stak &  Memory Heap.

        Blocking Code   Vs  Non-Blocking Code

        Blocking Code : ⤵   ➡ Read file Sync
                    Blocking the flow of program  exp:(jb hm kisi ko khy yahn bytho ma pani ly kr ata ho tb tk ap kuch ni kr skty).
        Non Blocking Code: ⤵  ➡ Read file Async
                    Does not block execution  exp:(jb hm kisi ko khy yahn bytho ap apna kam kro ma pani ly kr ata ho tb tk ap kush b kr skty hn).

             A Diagram

            Js Engine ⤵                
          ↙         ↘ 
       Memory Heap | Call Stack: fn,fn,fn,global 
                            ⬇
                            Call
                            ⬇
                           ↙                                    
                     Web API  
    Dom API, Set timeout⤵, set Interval,fetch⤵ promise
           ↙                               ↘                
       Register call back               cb | cb ➡ ➡⤵
            ⬇                  back to Js Engine(to Call Stack)
            Task Queue 
                    ↘ 
                 CB | CB ➡ Add to Call Stack ➡⤵
                                        Back to Js Engine (to Call Stack)
                                   




















*/
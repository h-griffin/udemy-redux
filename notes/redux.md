# use redux?

**type**                     **example**                **use redux?**

local ui state            hide/show backdrop                no          /use components

persistent                all users/posts                   no          /stored in sever, 
                                                            -        relevent slice managed by redux
                                                
client                   is authenticated /filter           YES          /not relevant to server


-----------------------------
use redux for application state that components need to know about that the server does not need to store
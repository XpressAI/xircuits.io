---
sidebar_position: 2
---
# Dynamic Ports

Dynamic Ports are a specialized category of ports designed to dynamically expand when linked, while still being treated as a singular variable in the compiled code. This feature is useful in workflows that require the concatenation of multiple unspecified inputs, such as appending chats as lists.

<div style={{ display: 'flex', justifyContent: 'center' }}>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/tdbJLUIUZPk?si=AnERo_c2IgnA9isl" title="Dynamic Ports" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

As a general guideline, the behaviors listed below are inherent to dynaports:

- DynaList, DynaTuple, and DynaDict are processed as normal lists, tuples, and dicts in the compiled code, with the order preserved according to the dynaport sequence.
- When a link is created to an empty dynaport, a new dynaport with an identical variable name is spawned below it. A [x] label is updated for every subsequently linked port.

<div style={{ display: 'flex', justifyContent: 'center' }}>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/CMLT5V6uhuk?si=WfY50Aw1niPUTA4N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

- All types of Literals can be linked to DynaLists and DynaTuples, but only Literal Dicts can be linked to DynaDicts.
- When a link to a dynaport is removed, the following dynaports are automatically updated.
If a link is created to a dynaport that already has a link, the new link assumes the current dynaport, and the existing link, along with the following dynaports, are shifted.

<div style={{ display: 'flex', justifyContent: 'center' }}>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/f_aZuBFlokQ?si=V2tkY-ghmjxuFGzU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

- Dynaport inherits other default port behaviors, such as reloading.

// Mock semiconductor news dataset.
// Schema per item: { id, title, summary, source, publishedAt, content }
export const news = [
  {
    id: 1,
    title: 'TSMC Ramps 2nm Production Ahead of Schedule',
    summary:
      'TSMC reports its N2 node has entered high-volume manufacturing, with early yields exceeding internal targets.',
    source: 'SemiWire',
    publishedAt: '2026-06-28',
    content:
      'TSMC has begun high-volume manufacturing of its 2nm (N2) process node at its Hsinchu and Kaohsiung fabs. ' +
      'The company says early defect densities are tracking better than the equivalent point in the N3 ramp, ' +
      'driven by refinements to its gate-all-around (GAA) nanosheet transistors. Lead customers in mobile and ' +
      'high-performance computing are expected to tape out first silicon in the second half of the year.',
  },
  {
    id: 2,
    title: 'ASML Ships First High-NA EUV Tool to U.S. Fab',
    summary:
      'The next-generation lithography system promises finer patterning for sub-2nm logic and advanced memory.',
    source: 'LithoDaily',
    publishedAt: '2026-06-25',
    content:
      'ASML has completed the first U.S. installation of its High-NA EUV lithography platform. With a 0.55 ' +
      'numerical aperture, the tool enables single-exposure patterning at pitches that previously required ' +
      'multi-patterning. Analysts note that throughput and mask costs remain the key economic questions as ' +
      'foundries weigh High-NA adoption against extended low-NA multi-patterning flows.',
  },
  {
    id: 3,
    title: 'HBM4 Standard Finalized as AI Memory Demand Surges',
    summary:
      'JEDEC publishes the HBM4 specification, doubling per-stack bandwidth for AI accelerators.',
    source: 'MemReport',
    publishedAt: '2026-06-21',
    content:
      'JEDEC has finalized the HBM4 memory standard, widening the interface to 2048 bits and pushing per-stack ' +
      'bandwidth well beyond HBM3E. Memory makers are racing to qualify parts for next-generation AI training ' +
      'accelerators, where memory bandwidth increasingly bounds achievable utilization. Hybrid bonding is ' +
      'expected to play a larger role in taller stacks to manage thermal and signal-integrity constraints.',
  },
  {
    id: 4,
    title: 'RISC-V Gains Ground in Automotive MCUs',
    summary:
      'Several tier-one suppliers announce RISC-V based microcontrollers for next-gen vehicle platforms.',
    source: 'ChipAuto',
    publishedAt: '2026-06-18',
    content:
      'The open RISC-V instruction set is making inroads into safety-critical automotive microcontrollers. ' +
      'Suppliers cite licensing flexibility and a growing tools ecosystem as decisive factors. Functional-safety ' +
      'certification of RISC-V cores has matured, easing adoption for ASIL-D domains such as braking and steering.',
  },
  {
    id: 5,
    title: 'Glass Substrates Move Toward Volume Packaging',
    summary:
      'Chipmakers detail roadmaps for glass core substrates to enable larger, denser multi-die packages.',
    source: 'PackWorld',
    publishedAt: '2026-06-14',
    content:
      'Glass core substrates are advancing from research to pilot production. Their dimensional stability and ' +
      'fine-line capability suit the very large package sizes demanded by data-center accelerators that integrate ' +
      'many chiplets. Remaining challenges include panel handling, crack mitigation, and building out a resilient ' +
      'supply chain outside of incumbent organic-substrate vendors.',
  },
]

// Return a copy so callers cannot mutate the source data.
export function getAllNews() {
  return news.map((item) => ({ ...item }))
}

export function getNewsById(id) {
  const item = news.find((n) => n.id === Number(id))
  return item ? { ...item } : null
}

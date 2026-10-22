import Link from 'next/link';
export function Bi({ja,en}:{ja:string;en:string}) {return <>{ja}<span lang="en" className="en">{en}</span></>;}
export function Heading({kicker,ja,en,description}:{kicker:string;ja:string;en:string;description?:React.ReactNode}){return <div className="page-heading"><p className="eyebrow">{kicker}</p><h1><Bi ja={ja} en={en}/></h1>{description&&<div className="lead">{description}</div>}</div>;}
export function Badge({status='PROPOSED'}:{status?:string}){const names:Record<string,string>={PROPOSED:'計画案',RESEARCH:'調査・見積段階',FUTURE:'将来構想',UNCONFIRMED:'未照合',ASSUMPTION:'計算上の仮定',FACT:'確認済み事実',EXT:'外部事例'};return <span className={'badge '+status.toLowerCase()}>{names[status]??status} <span lang="en">{status}</span></span>;}
export function Source({pages}:{pages:string|number}){return <Link className="source" href={'/evidence#master'}>統合マスター / Master · p.{pages} ↗</Link>;}
export function Notice(){return <div className="notice"><span aria-hidden="true">↳</span><div><Bi ja="目標・担当・日程は計画案です。予算と発売は個別の承認が必要です。" en="Targets, roles and dates are proposals. Budget and product launch decisions require separate approval."/></div></div>;}
export function Related({ids}:{ids:string[]}){return <div className="chips">{ids.map(id=><Link key={id} href={'/'+(id[0]==='W'?'capabilities':'engines')+'/'+id}>{id} ↗</Link>)}</div>;}

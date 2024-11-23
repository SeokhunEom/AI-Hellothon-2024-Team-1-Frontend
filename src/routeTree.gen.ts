/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SeniorRecordImport } from './routes/senior.record'
import { Route as SeniorMemoriesImport } from './routes/senior.memories'
import { Route as ReportIdImport } from './routes/report.$id'
import { Route as ReadyIdImport } from './routes/ready.$id'
import { Route as MakeIdImport } from './routes/make.$id'
import { Route as EduIdImport } from './routes/edu.$id'
import { Route as CareMemoIdImport } from './routes/care-memo.$id'

// Create Virtual Routes

const CareLazyImport = createFileRoute('/care')()
const SeniorHomeLazyImport = createFileRoute('/senior/home')()

// Create/Update Routes

const CareLazyRoute = CareLazyImport.update({
  id: '/care',
  path: '/care',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/care.lazy').then((d) => d.Route))

const SeniorHomeLazyRoute = SeniorHomeLazyImport.update({
  id: '/senior/home',
  path: '/senior/home',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/senior.home.lazy').then((d) => d.Route))

const SeniorRecordRoute = SeniorRecordImport.update({
  id: '/senior/record',
  path: '/senior/record',
  getParentRoute: () => rootRoute,
} as any)

const SeniorMemoriesRoute = SeniorMemoriesImport.update({
  id: '/senior/memories',
  path: '/senior/memories',
  getParentRoute: () => rootRoute,
} as any)

const ReportIdRoute = ReportIdImport.update({
  id: '/report/$id',
  path: '/report/$id',
  getParentRoute: () => rootRoute,
} as any)

const ReadyIdRoute = ReadyIdImport.update({
  id: '/ready/$id',
  path: '/ready/$id',
  getParentRoute: () => rootRoute,
} as any)

const MakeIdRoute = MakeIdImport.update({
  id: '/make/$id',
  path: '/make/$id',
  getParentRoute: () => rootRoute,
} as any)

const EduIdRoute = EduIdImport.update({
  id: '/edu/$id',
  path: '/edu/$id',
  getParentRoute: () => rootRoute,
} as any)

const CareMemoIdRoute = CareMemoIdImport.update({
  id: '/care-memo/$id',
  path: '/care-memo/$id',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/care': {
      id: '/care'
      path: '/care'
      fullPath: '/care'
      preLoaderRoute: typeof CareLazyImport
      parentRoute: typeof rootRoute
    }
    '/care-memo/$id': {
      id: '/care-memo/$id'
      path: '/care-memo/$id'
      fullPath: '/care-memo/$id'
      preLoaderRoute: typeof CareMemoIdImport
      parentRoute: typeof rootRoute
    }
    '/edu/$id': {
      id: '/edu/$id'
      path: '/edu/$id'
      fullPath: '/edu/$id'
      preLoaderRoute: typeof EduIdImport
      parentRoute: typeof rootRoute
    }
    '/make/$id': {
      id: '/make/$id'
      path: '/make/$id'
      fullPath: '/make/$id'
      preLoaderRoute: typeof MakeIdImport
      parentRoute: typeof rootRoute
    }
    '/ready/$id': {
      id: '/ready/$id'
      path: '/ready/$id'
      fullPath: '/ready/$id'
      preLoaderRoute: typeof ReadyIdImport
      parentRoute: typeof rootRoute
    }
    '/report/$id': {
      id: '/report/$id'
      path: '/report/$id'
      fullPath: '/report/$id'
      preLoaderRoute: typeof ReportIdImport
      parentRoute: typeof rootRoute
    }
    '/senior/memories': {
      id: '/senior/memories'
      path: '/senior/memories'
      fullPath: '/senior/memories'
      preLoaderRoute: typeof SeniorMemoriesImport
      parentRoute: typeof rootRoute
    }
    '/senior/record': {
      id: '/senior/record'
      path: '/senior/record'
      fullPath: '/senior/record'
      preLoaderRoute: typeof SeniorRecordImport
      parentRoute: typeof rootRoute
    }
    '/senior/home': {
      id: '/senior/home'
      path: '/senior/home'
      fullPath: '/senior/home'
      preLoaderRoute: typeof SeniorHomeLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/care': typeof CareLazyRoute
  '/care-memo/$id': typeof CareMemoIdRoute
  '/edu/$id': typeof EduIdRoute
  '/make/$id': typeof MakeIdRoute
  '/ready/$id': typeof ReadyIdRoute
  '/report/$id': typeof ReportIdRoute
  '/senior/memories': typeof SeniorMemoriesRoute
  '/senior/record': typeof SeniorRecordRoute
  '/senior/home': typeof SeniorHomeLazyRoute
}

export interface FileRoutesByTo {
  '/care': typeof CareLazyRoute
  '/care-memo/$id': typeof CareMemoIdRoute
  '/edu/$id': typeof EduIdRoute
  '/make/$id': typeof MakeIdRoute
  '/ready/$id': typeof ReadyIdRoute
  '/report/$id': typeof ReportIdRoute
  '/senior/memories': typeof SeniorMemoriesRoute
  '/senior/record': typeof SeniorRecordRoute
  '/senior/home': typeof SeniorHomeLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/care': typeof CareLazyRoute
  '/care-memo/$id': typeof CareMemoIdRoute
  '/edu/$id': typeof EduIdRoute
  '/make/$id': typeof MakeIdRoute
  '/ready/$id': typeof ReadyIdRoute
  '/report/$id': typeof ReportIdRoute
  '/senior/memories': typeof SeniorMemoriesRoute
  '/senior/record': typeof SeniorRecordRoute
  '/senior/home': typeof SeniorHomeLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/care'
    | '/care-memo/$id'
    | '/edu/$id'
    | '/make/$id'
    | '/ready/$id'
    | '/report/$id'
    | '/senior/memories'
    | '/senior/record'
    | '/senior/home'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/care'
    | '/care-memo/$id'
    | '/edu/$id'
    | '/make/$id'
    | '/ready/$id'
    | '/report/$id'
    | '/senior/memories'
    | '/senior/record'
    | '/senior/home'
  id:
    | '__root__'
    | '/care'
    | '/care-memo/$id'
    | '/edu/$id'
    | '/make/$id'
    | '/ready/$id'
    | '/report/$id'
    | '/senior/memories'
    | '/senior/record'
    | '/senior/home'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  CareLazyRoute: typeof CareLazyRoute
  CareMemoIdRoute: typeof CareMemoIdRoute
  EduIdRoute: typeof EduIdRoute
  MakeIdRoute: typeof MakeIdRoute
  ReadyIdRoute: typeof ReadyIdRoute
  ReportIdRoute: typeof ReportIdRoute
  SeniorMemoriesRoute: typeof SeniorMemoriesRoute
  SeniorRecordRoute: typeof SeniorRecordRoute
  SeniorHomeLazyRoute: typeof SeniorHomeLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  CareLazyRoute: CareLazyRoute,
  CareMemoIdRoute: CareMemoIdRoute,
  EduIdRoute: EduIdRoute,
  MakeIdRoute: MakeIdRoute,
  ReadyIdRoute: ReadyIdRoute,
  ReportIdRoute: ReportIdRoute,
  SeniorMemoriesRoute: SeniorMemoriesRoute,
  SeniorRecordRoute: SeniorRecordRoute,
  SeniorHomeLazyRoute: SeniorHomeLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/care",
        "/care-memo/$id",
        "/edu/$id",
        "/make/$id",
        "/ready/$id",
        "/report/$id",
        "/senior/memories",
        "/senior/record",
        "/senior/home"
      ]
    },
    "/care": {
      "filePath": "care.lazy.tsx"
    },
    "/care-memo/$id": {
      "filePath": "care-memo.$id.tsx"
    },
    "/edu/$id": {
      "filePath": "edu.$id.tsx"
    },
    "/make/$id": {
      "filePath": "make.$id.tsx"
    },
    "/ready/$id": {
      "filePath": "ready.$id.tsx"
    },
    "/report/$id": {
      "filePath": "report.$id.tsx"
    },
    "/senior/memories": {
      "filePath": "senior.memories.tsx"
    },
    "/senior/record": {
      "filePath": "senior.record.tsx"
    },
    "/senior/home": {
      "filePath": "senior.home.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */

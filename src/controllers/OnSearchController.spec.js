import {
  beforeEach, describe, expect, it, vi,
} from 'vitest';
import LookUpService from '../services/LookUpService';
import OnSearchController from './OnSearchController';
import authVerifier from '../utilities/SignVerify/AuthHeaderVerifier';
import GenericResponse from '../utilities/GenericResponse';
import SearchService from '../services/SearchService';
import onSearchRequest from '../requests/OnSearchRequest.js';

beforeEach(() => {
  LookUpService.getPublicKey = vi.fn();
  authVerifier.authorize = vi.fn(() => Promise.resolve(true));
  SearchService.storeSearchResult = vi.fn();
  GenericResponse.sendAcknowledgement = vi.fn();
  GenericResponse.sendErrorWithAuthorization = vi.fn();
});

describe('OnSearch Controller', () => {
  it('should test whether public key is acquired', async () => {
    await OnSearchController.onSearch(onSearchRequest);
    expect(LookUpService.getPublicKey)
      .toBeCalled();
  });

  it('should test for authorize is called', async () => {
    await OnSearchController.onSearch(onSearchRequest);
    expect(authVerifier.authorize)
      .toHaveBeenCalled();
  });

  it('should test for storeSearchResult is called', async () => {
    await OnSearchController.onSearch(onSearchRequest);
    expect(SearchService.storeSearchResult)
      .toBeCalled();
  });

  it('should test for onSearch response', async () => {
    const res = {};
    await OnSearchController.onSearch(onSearchRequest, res);
    expect(GenericResponse.sendAcknowledgement)
      .toBeCalledWith(res);
  });

  it('should test for authorization failure', async () => {
    authVerifier.authorize = vi.fn(() => Promise.reject(new Error('fail')));
    const res = {};
    await OnSearchController.onSearch(onSearchRequest, res);
    expect(GenericResponse.sendErrorWithAuthorization)
      .toBeCalled();
  });
});
